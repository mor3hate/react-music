import { ITopChartSong } from '../../../store/shazam/shazamCore-interface'

export interface ISearchData {
	tracks: ITrackHit
}

export interface ITrackHit {
	hits: IHits[]
}

export interface IHits {
	track: ITrack
}

export interface ITrack
	extends Pick<ITopChartSong, 'title' | 'key' | 'images'> {}
