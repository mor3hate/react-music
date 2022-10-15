import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { SongService } from '../../../services/song.service'

export const useSong = (id: number) => {
	const queryData = useQuery(
		['get song information', id],
		() => SongService.GetTrackById(id),
		{
			select: ({ data }) => data,
			enabled: !!id,
		}
	)

	const { data: relatedData, isLoading: isLoadingRelated } = useQuery(
		['get related song information', id],
		() => SongService.GetRelatedTrackById(id),
		{
			select: ({ data }) => data,
			enabled: !!id,
		}
	)
	return { ...queryData, relatedData, isLoadingRelated }
}
