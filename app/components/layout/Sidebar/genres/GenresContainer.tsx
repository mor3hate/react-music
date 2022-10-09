import { FC } from 'react'
import { IGenreMenu } from './genre-interface'
import GenreItem from './GenreItem'
import { motion } from 'framer-motion'
import styles from './Genre.module.scss'

const GenresContainer: FC<{ menu: IGenreMenu }> = ({
	menu: { items, title },
}) => {
	return (
		<>
			<h2 className={styles.sub_title}>{title}</h2>
			<motion.div
				initial={{ opacity: 0, x: 500 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1.5 }}
				className={styles.genre_container}
			>
				{items.map(item => (
					<GenreItem item={item} key={item.link} />
				))}
			</motion.div>
		</>
	)
}

export default GenresContainer
