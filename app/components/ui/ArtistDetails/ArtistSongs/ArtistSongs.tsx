import { motion } from 'framer-motion'
import { FC } from 'react'
import { ISongData } from '../../../screens/artist/artist-interface'
import ArtistSongItem from './ArtistSongItem'

import styles from './ArtistSongs.module.scss'

const ArtistSongs: FC<ISongData> = ({ data }) => {
	return (
		<motion.div
			initial={{ x: '-100%', opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ duration: 1.5 }}
			className={styles.artist_songs}
		>
			{data.map((item, i) => (
				<ArtistSongItem
					attributes={item.attributes}
					id={item.id}
					key={item.id}
					index={i}
				/>
			))}
		</motion.div>
	)
}

export default ArtistSongs
