import { ITopChartSong } from '../shazam/shazamCore-interface'

export interface IFavorite extends ITopChartSong {}

export interface IFavorites {
	favorites: IFavorite[]
}
