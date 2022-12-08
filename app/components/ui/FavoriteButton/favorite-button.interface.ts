import { IFavorite } from '../../../store/favorites/favorites.interface'

export interface IFavoriteButton extends Omit<IFavorite, 'key'> {}
