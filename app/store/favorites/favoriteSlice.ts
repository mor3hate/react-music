import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFavorite, IFavorites } from './favorites.interface'

const initialState: IFavorites = {
	favorites: []
}

export const favoriteSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorite: (state, action: PayloadAction<IFavorite>) => {
			state.favorites.some(f => f.songId === action.payload.songId)
				? (state.favorites = state.favorites.filter(
						item => item.songId !== action.payload.songId
				  ))
				: state.favorites.push(action.payload)
		}
	}
})

export const { toggleFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer
