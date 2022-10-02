export interface IPlayer {
	isPlaying: boolean
	currentTrack: {
		uri: string
		name: string
	}
	currentTrackIsPlaying: boolean
}
