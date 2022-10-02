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
			name: '☀️Chill Hits',
			link: '/chill-hits',
			slug: 'chill-hits',
		},
		{
			name: '⚡️Hip-Hop',
			link: '/hip-hop',
			slug: 'hip-hop',
		},
		{
			name: '🔥Rock',
			link: '/rock',
			slug: 'rock',
		},
		{
			name: '💥Nu metal',
			link: '/nu-metal',
			slug: 'nu-metal',
		},
		{
			name: '🎺Jazz',
			link: '/jazz',
			slug: 'jazz',
		},
		{
			name: '💗Pop',
			link: '/pop',
			slug: 'pop',
		},
	],
}
