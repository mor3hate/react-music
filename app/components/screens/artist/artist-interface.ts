export interface IArtists {
	artists: IArtist[]
	songs: [string, Song][]
}

export interface IArtist {
	attributes: IAttributes
}

export interface IAttributes {
	name: string
	artwork: IArtWork
}

export interface IArtWork {
	url: string
}

export interface Song {
	index: number
	attributes: SongAttributes
}

export interface SongAttributes {
	name: string
	previews: Preview[]
	artwork: IArtWork
}

export interface Preview {
	url: string
}
