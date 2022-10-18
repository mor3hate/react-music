import { FC } from 'react'
import GenresContainer from './genres/GenresContainer'
import { genresMenu } from './genres/genre-interface'
import Search from '../Search/Search'

const Sidebar: FC = () => {
	return (
		<aside>
			<Search />
			<GenresContainer menu={genresMenu} />
		</aside>
	)
}

export default Sidebar
