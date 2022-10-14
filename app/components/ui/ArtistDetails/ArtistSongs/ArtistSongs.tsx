import { motion } from 'framer-motion'
import { FC } from 'react'
import { Song } from '../../../screens/artist/artist-interface'
import ArtistSongItem from './ArtistSongItem'

import styles from './ArtistSongs.module.scss'

interface IArtistSongs {
	songs: [string, Song][]
}

const ArtistSongs: FC<IArtistSongs> = ({ songs }) => {
	return (
		<motion.div
			initial={{ x: '-100%', opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ duration: 1.5 }}
			className={styles.artist_songs}
		>
			{songs.map((item, i) => (
				<ArtistSongItem
					attributes={item[1].attributes}
					key={item[0]}
					index={i}
				/>
			))}
		</motion.div>
	)
}

export default ArtistSongs
