import { test, expect } from '@playwright/test';
import { tvMaze } from '../../src/Clients/TVmazeClient';
import { SearchShowDto } from '../../src/Clients/TVmazeClient/SearchShowDto';

test('get a show by show id', async () => {
	const response = await tvMaze.searchByShowName('mr robot');
	const data = await response.json();

	const expected: SearchShowDto[] = [
		{
			score: expect.any(Number) as unknown as number,
			show: {
				id: 1871,
				url: 'https://www.tvmaze.com/shows/1871/mr-robot',
				name: 'Mr. Robot',
				type: 'Scripted',
				language: 'English',
				genres: ['Drama', 'Crime', 'Thriller'],
				status: 'Ended',
				runtime: 60,
				averageRuntime: 61,
				premiered: '2015-06-24',
				ended: '2019-12-22',
				officialSite: 'https://www.usanetwork.com/mr-robot',
				schedule: { time: '22:00', days: ['Sunday'] },
				rating: { average: 8.3 },
				weight: 98,
				network: {
					id: 30,
					name: 'USA Network',
					country: {
						name: 'United States',
						code: 'US',
						timezone: 'America/New_York',
					},
					officialSite: null,
				},
				webChannel: null,
				dvdCountry: null,
				externals: {
					tvrage: 42422,
					thetvdb: 289590,
					imdb: 'tt4158110',
				},
				image: {
					medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/211/528026.jpg',
					original:
						'https://static.tvmaze.com/uploads/images/original_untouched/211/528026.jpg',
				},
				summary:
					'<p><b>Mr. Robot</b> follows Elliot, a young programmer who works as a cyber-security engineer by day and as a vigilante hacker by night. Elliot finds himself at a crossroads when the mysterious leader of an underground hacker group recruits him to destroy the firm he is paid to protect. Compelled by his personal beliefs, Elliot struggles to resist the chance to take down the multinational CEOs he believes are running (and ruining) the world.</p>',
				updated: 1645396774,
				_links: {
					self: { href: 'https://api.tvmaze.com/shows/1871' },
					previousepisode: {
						href: 'https://api.tvmaze.com/episodes/1762042',
					},
				},
			},
		},
	];

	expect(data).toMatchObject(expected);
});
