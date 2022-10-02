import { FC } from 'react'
import GenresContainer from './genres/GenresContainer'
import { genresMenu } from './genres/genre-interface'

const Sidebar: FC = () => {
	return (
		<aside>
			<GenresContainer menu={genresMenu} />
		</aside>
	)
}

export default Sidebar
