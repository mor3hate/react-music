import { axiosDefault } from '../api/api'
import { ISearchData } from '../components/layout/Search/search-data.interface'

export const SearchService = {
	async GetSearchResults(query: string) {
		return axiosDefault.get<ISearchData>('/search/multi', {
			params: { query: query, search_type: 'SONGS' },
		})
	},
}
