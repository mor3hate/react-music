import { FC } from 'react'
import SearchField from '../../ui/SearchField/SearchField'

import styles from './Search.module.scss'
import SearchList from './SearchList/SearchList'
import { useSearch } from './useSearch'

const Search: FC = () => {
	const { data, isSuccess, searchTerm, handleSearch, clearSearch } = useSearch()
	return (
		<div className={styles.search_wrapper}>
			<SearchField handleSearch={handleSearch} searchTerm={searchTerm} />
			{isSuccess && (
				<SearchList hits={data?.tracks.hits || []} onClick={clearSearch} />
			)}
		</div>
	)
}

export default Search
