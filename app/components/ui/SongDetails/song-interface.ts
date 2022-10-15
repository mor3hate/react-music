import { ITopChartSong } from '../../../store/shazam/shazamCore-interface'
import { ILyricSection } from './SongLyrics/song-lyrics-interface'

interface IGenre {
	primary: string
}

export interface ISong extends Omit<ITopChartSong, 'songId' | 'key'> {
	genres: IGenre
	sections?: ILyricSection[]
}
