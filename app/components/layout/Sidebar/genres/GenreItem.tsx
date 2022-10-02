import Link from 'next/link'
import { FC } from 'react'
import { IGenreItem } from './genre-interface'

import styles from './Genre.module.scss'

const GenreItem: FC<{ item: IGenreItem }> = ({ item }) => {
	return (
		<Link href={item.link}>
			<a className={styles.genre}>{item.name}</a>
		</Link>
	)
}

export default GenreItem
