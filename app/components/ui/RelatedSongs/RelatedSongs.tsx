import { motion } from 'framer-motion'
import { FC } from 'react'
import { IRelatedSongsMenu } from './related-song.interface'
import RelatedSongItem from './RelatedSongItem'

import styles from './RelatedSongs.module.scss'

const RelatedSongs: FC<IRelatedSongsMenu> = ({ menu }) => {
	return (
		<motion.div
			className={styles.related_song_menu}
			initial={{ opacity: 0, scale: 0.7 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true }}
		>
			{menu.length ? (
				menu
					.filter(i => !!i.hub.actions)
					.map((item, i) => (
						<RelatedSongItem
							index={i}
							title={item.title}
							hub={item.hub}
							key={item.hub.actions[1].uri}
						/>
					))
			) : (
				<div>No related songs found!</div>
			)}
		</motion.div>
	)
}

export default RelatedSongs
