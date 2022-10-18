import { useQuery } from '@tanstack/react-query'
import { ChangeEvent, useState } from 'react'
import { useDebounce } from '../../../hooks/useDebounce'
import { SearchService } from '../../../services/search.service'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedValue = useDebounce(searchTerm, 500)

	const { isSuccess, data } = useQuery(
		['search for songs', debouncedValue],
		() => SearchService.GetSearchResults(debouncedValue),
		{
			select: ({ data }) => data,
			enabled: !!debouncedValue,
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const clearSearch = () => {
		setSearchTerm('')
	}

	return { isSuccess, data, handleSearch, searchTerm, clearSearch }
}
