import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IPlayer } from './player-interface'

const initialState: IPlayer = {
	isPlaying: false,
	currentTrack: {
		uri: '',
		name: '',
	},
	currentTrackIsPlaying: false,
}

export const playerSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {
		setPlay: (state, action: PayloadAction<boolean>) => {
			state.isPlaying = action.payload
		},
		setCurrentTrack: (state, action: PayloadAction<string>) => {
			state.currentTrack.uri = action.payload
		},
		setCurrentTrackName: (state, action: PayloadAction<string>) => {
			state.currentTrack.name = action.payload
		},
		setToggleSong: (state, action: PayloadAction<boolean>) => {
			state.currentTrackIsPlaying = action.payload
		},
	},
})

export const { setPlay, setCurrentTrack, setToggleSong, setCurrentTrackName } =
	playerSlice.actions

export default playerSlice.reducer
