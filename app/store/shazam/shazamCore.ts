import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'
import { ITopChartSong } from './shazamCore-interface'

export const shazamCoreApi = createApi({
	reducerPath: 'shazamApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
		prepareHeaders: headers => {
			//@ts-ignore
			headers.set('X-RapidAPI-Key', process.env.RAPID_KEY)

			return headers
		},
	}),
	extractRehydrationInfo(action, { reducerPath }) {
		if (action.type === HYDRATE) {
			return action.payload[reducerPath]
		}
	},
	endpoints: builder => ({
		getTopCharts: builder.query<ITopChartSong[], string>({
			query: name => `/charts/${name}`,
		}),
		getTopChartsByCountry: builder.query<ITopChartSong[], string>({
			query: arg => {
				return {
					url: `/charts/country`,
					params: { country_code: arg },
				}
			},
		}),
	}),
})

export const { useGetTopChartsQuery, useGetTopChartsByCountryQuery } =
	shazamCoreApi
