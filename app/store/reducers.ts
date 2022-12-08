import { combineReducers } from '@reduxjs/toolkit'
import playerReducer from './player/PlayerSlice'
import favoriteReducer from './favorites/favoriteSlice'

export const rootReducer = combineReducers({
	player: playerReducer,
	favorites: favoriteReducer
})
