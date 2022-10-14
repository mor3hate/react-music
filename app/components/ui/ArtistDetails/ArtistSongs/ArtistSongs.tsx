import { FC } from 'react'
import { Song } from '../../../screens/artist/artist-interface'
import ArtistSongItem from './ArtistSongItem'

import styles from './ArtistSongs.module.scss'

interface IArtistSongs {
	songs: [string, Song][]
}

const ArtistSongs: FC<IArtistSongs> = ({ songs }) => {
	return (
		<div className={styles.artist_songs}>
			{songs.map((item, i) => (
				<ArtistSongItem
					attributes={item[1].attributes}
					key={item[0]}
					index={i}
				/>
			))}
		</div>
	)
}

export default ArtistSongs
