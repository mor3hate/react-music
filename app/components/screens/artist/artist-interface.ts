export interface IArtistSingleData {
	data: IArtistData[]
}

export interface IArtistData {
	attributes: IAttributes
	views: IView
}

export interface IView {
	'top-songs': ISongData
}

export interface ISongData {
	data: Song[]
}

export interface IAttributes {
	name: string
	artwork: IArtWork
}

export interface IArtWork {
	url: string
}

export interface Song {
	id: string
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
