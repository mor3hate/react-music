import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import playerReducer from './player/PlayerSlice'

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, playerReducer)

export const store = () =>
	configureStore({
		reducer: {
			persistedReducer,
		},
		middleware: [thunk],
	})

export const persistor = persistStore(store())

export type AppStore = ReturnType<typeof store>

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']
