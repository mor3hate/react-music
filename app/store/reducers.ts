import { combineReducers } from '@reduxjs/toolkit'
import playerReducer from './player/PlayerSlice'

export const rootReducer = combineReducers({
	player: playerReducer,
})
