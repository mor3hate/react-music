import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ICurrentTrack, IPlayer } from './player-interface'
import { ITopChartSong } from '../shazam/shazamCore-interface'

const initialState: IPlayer = {
	isPlaying: false,
	currentTrack: {
		uri: '',
		name: '',
		index: 0,
	},
	currentTrackIsPlaying: false,
	allSongs: [],
}

export const playerSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {
		setAllSongs: (state, action: PayloadAction<ITopChartSong[]>) => {
			state.allSongs = [...action.payload]
		},
		setCurrentTrack: (state, action: PayloadAction<ICurrentTrack>) => {
			state.currentTrack = action.payload
			state.isPlaying = true
		},
		setToggleSong: (state, action: PayloadAction<boolean>) => {
			state.currentTrackIsPlaying = action.payload
		},
	},
})

export const { setCurrentTrack, setToggleSong, setAllSongs } =
	playerSlice.actions

export default playerSlice.reducer
