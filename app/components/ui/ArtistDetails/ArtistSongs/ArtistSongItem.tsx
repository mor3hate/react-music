import { FC } from 'react'
import Image from 'next/image'
import styles from './ArtistSongs.module.scss'
import { Song } from '../../../screens/artist/artist-interface'
import PlayPause from '../../Play-Pause/PlayPause'
import { usePlay } from '../../../../hooks/usePlay'

const ArtistSongItem: FC<Song> = ({ attributes, index }) => {
	const { handlePlay, handlePause } = usePlay()
	return (
		<div className={styles.song_details}>
			<div className={styles.song_detailsImg}>
				<Image
					src={attributes.artwork.url
						.replace('{w}', '176')
						.replace('{h}', '176')}
					className={styles.img}
					layout='fill'
					unoptimized
					draggable={false}
				/>
				<PlayPause
					onPause={handlePause}
					onPlay={() =>
						handlePlay(attributes.previews[0].url || '', attributes.name, index)
					}
					title={attributes.name}
				/>
			</div>
			<p>{attributes.name}</p>
		</div>
	)
}

export default ArtistSongItem
