import { FC } from 'react'
import { IGenreMenu } from './genre-interface'
import GenreItem from './GenreItem'

import styles from './Genre.module.scss'

const GenresContainer: FC<{ menu: IGenreMenu }> = ({
	menu: { items, title },
}) => {
	return (
		<>
			<h2 className={styles.sub_title}>{title}</h2>
			<div className={styles.genre_container}>
				{items.map(item => (
					<GenreItem item={item} key={item.link} />
				))}
			</div>
		</>
	)
}

export default GenresContainer
