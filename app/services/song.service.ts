import { axiosDefault } from '../api/api'
import { IRelatedSongItem } from '../components/ui/RelatedSongs/related-song.interface'
import { ISong } from '../components/ui/SongDetails/song-interface'

export const SongService = {
	async GetTrackById(id: number) {
		return axiosDefault.get<ISong>('/tracks/details', {
			params: { track_id: id },
		})
	},
	async GetRelatedTrackById(id: number) {
		return axiosDefault.get<IRelatedSongItem[]>('/tracks/related', {
			params: { track_id: id },
		})
	},
}
