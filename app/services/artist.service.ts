import { axiosDefault } from '../api/api'
import { IArtists } from '../components/screens/artist/artist-interface'

export const ArtistService = {
	async GetArtistById(id: number) {
		return axiosDefault.get<IArtists>('/artists/details', {
			params: { artist_id: id },
		})
	},
}
