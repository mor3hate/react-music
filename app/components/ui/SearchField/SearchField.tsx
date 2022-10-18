import { ChangeEvent, FC } from 'react'
import MdIcon from '../MdIcon'

import styles from './SearchField.module.scss'

interface ISearchField {
	searchTerm: string
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<ISearchField> = ({ searchTerm, handleSearch }) => {
	return (
		<div className={styles.search_field}>
			<MdIcon name='MdSearch' />
			<input
				type='search'
				placeholder='Search for songs...'
				value={searchTerm}
				onChange={handleSearch}
			/>
		</div>
	)
}

export default SearchField
