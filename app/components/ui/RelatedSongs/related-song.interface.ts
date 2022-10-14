import { ITopChartSong } from '../../../store/shazam/shazamCore-interface'

export interface IRelatedSongItem
	extends Pick<ITopChartSong, 'hub' | 'title' | 'index'> {}

export interface IRelatedSongsMenu {
	menu: IRelatedSongItem[]
}
