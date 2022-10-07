export interface IGenreItem {
	name: string
	link: string
	slug: string
}

export interface IGenreMenu {
	title: string
	items: IGenreItem[]
}

export const genresMenu: IGenreMenu = {
	title: 'Shortcuts',
	items: [
		{
			name: '☀️House',
			link: '/genres/house',
			slug: 'house',
		},
		{
			name: '⚡️Hip-Hop',
			link: '/genres/hip_hop_rap',
			slug: 'hip_hop_rap',
		},
		{
			name: '🔥Rock',
			link: '/genres/rock',
			slug: 'rock',
		},
		{
			name: '💥Electronic',
			link: '/genres/electronic',
			slug: 'electronic',
		},
		{
			name: '🎺Alternative',
			link: '/genres/alternative',
			slug: 'alternative',
		},
		{
			name: '💗Pop',
			link: '/genres/pop',
			slug: 'pop',
		},
	],
}
