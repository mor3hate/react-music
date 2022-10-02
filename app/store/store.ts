import { configureStore } from '@reduxjs/toolkit'
import { shazamCoreApi } from './shazam/shazamCore'
import playerReducer from './player/PlayerSlice'
import { createWrapper } from 'next-redux-wrapper'

export const store = () =>
	configureStore({
		reducer: {
			[shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
			player: playerReducer,
		},
	})

export type AppStore = ReturnType<typeof store>

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper<AppStore>(store, { debug: true })
