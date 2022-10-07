import Link from 'next/link'
import { FC } from 'react'
import { IGenreItem } from './genre-interface'

import styles from './Genre.module.scss'
import clsx from 'clsx'
import { useRouter } from 'next/router'

const GenreItem: FC<{ item: IGenreItem }> = ({ item }) => {
	const { asPath } = useRouter()
	return (
		<Link href={item.link}>
			<a
				className={clsx(styles.genre, {
					[styles.active]: asPath === item.link,
				})}
			>
				{item.name}
			</a>
		</Link>
	)
}

export default GenreItem
