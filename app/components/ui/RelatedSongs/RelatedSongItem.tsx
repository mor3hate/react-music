import { motion } from 'framer-motion'
import { FC } from 'react'
import { usePlay } from '../../../hooks/usePlay'
import { IRelatedSongItem } from './related-song.interface'

import styles from './RelatedSongs.module.scss'

const RelatedSongItem: FC<IRelatedSongItem> = ({ index, title, hub }) => {
	const { handlePlay } = usePlay()
	return (
		<motion.div
			whileTap={{ scale: 0.9 }}
			whileHover={{ scale: 1.1 }}
			onClick={() => handlePlay(hub.actions[1]?.uri || '', title, index)}
			className={styles.related_item}
		>
			<span>{index + 1}.</span>
			<span>{title}</span>
		</motion.div>
	)
}

export default RelatedSongItem
