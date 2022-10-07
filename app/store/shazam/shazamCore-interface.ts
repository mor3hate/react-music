export interface Action {
	id?: string
	uri?: string
}

export interface Hub {
	actions: Action[]
}

export interface IArtist {
	adamid: string
	alias: string
	id: string
}

export interface Images {
	coverart: string
}

export interface ITopChartSong {
	artists: IArtist[]
	images: Images
	hub: Hub
	key: string
	songId: string
	subtitle: string
	title: string
	index: number
}
