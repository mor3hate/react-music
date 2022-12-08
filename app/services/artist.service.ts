import axios from 'axios'
import { IArtistSingleData } from '../components/screens/artist/artist-interface'

export const ArtistService = {
	async GetArtistById(id: number) {
		return axios.get<IArtistSingleData>(
			'https://shazam-core.p.rapidapi.com/v2/artists/details',
			{
				headers: {
					'Content-type': 'application/json',
					'X-RapidAPI-Key': process.env.RAPID_KEY
				},
				params: { artist_id: id }
			}
		)
	}
}
