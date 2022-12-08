import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { ArtistService } from '../../../services/artist.service'

export const useArtist = (id: number) => {
	const queryData = useQuery(
		['get artist information', id],
		() => ArtistService.GetArtistById(id),
		{
			select: ({ data }) => data.data,
			enabled: !!id
		}
	)
	return useMemo(() => ({ ...queryData }), [queryData])
}
