import { axiosDefault } from '../api/api'
import { ITopChartSong } from '../store/shazam/shazamCore-interface'

export const TopChartService = {
	async GetTopChartsWorld() {
		return axiosDefault.get<ITopChartSong[]>('/charts/world')
	},

	async GetTopChartsCountry(slug: string) {
		return axiosDefault.get<ITopChartSong[]>('/charts/country', {
			params: { country_code: slug },
		})
	},

	async GetTopChartsGenre(slug: string) {
		return axiosDefault.get<ITopChartSong[]>('/charts/genre-world', {
			params: { genre_code: slug },
		})
	},
}
