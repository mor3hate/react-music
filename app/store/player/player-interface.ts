import { ITopChartSong } from '../shazam/shazamCore-interface'

export interface IPlayer {
	isPlaying: boolean
	currentTrack: ICurrentTrack
	currentTrackIsPlaying: boolean
	allSongs: ITopChartSong[]
}

export interface ICurrentTrack {
	uri: string
	name: string
	index: number
}
