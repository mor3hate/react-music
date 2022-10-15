import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useAppSelector } from '../../../hooks/reduxHooks'
import { usePlay } from '../../../hooks/usePlay'
import Button from '../Button/Button'
import { ISong } from './song-interface'

import styles from './SongDetails.module.scss'

const SongDetails: FC<{ song: ISong }> = ({ song }) => {
	const { handlePlay } = usePlay()

	const { currentTrackIsPlaying } = useAppSelector(
		state => state.persistedReducer
	)

	return (
		<motion.div
			className={styles.song_details_card}
			initial={{ y: '-100%', opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<Image
				src={song.images.coverart}
				layout='fill'
				alt='poster'
				unoptimized
				draggable={false}
				priority
				className={styles.img}
			/>
			<div className={styles.song_details_card_left}>
				<Link
					href={
						song.artists.length
							? `/artists/${song.artists[0].adamid}`
							: '/top-artists'
					}
				>
					<a>{song.subtitle}</a>
				</Link>
				<h3>{song.title}</h3>
				<Button
					title='Play'
					onClick={() =>
						handlePlay(song.hub.actions[1]?.uri || '', song.title, song.index)
					}
				/>
			</div>
			<div className={styles.song_details_card_right}>
				<p>Genres</p>
				<Link
					href={
						`/genres/${song.genres.primary.toLowerCase()}` || '/genres/house'
					}
				>
					<a>{song.genres.primary}</a>
				</Link>
			</div>
		</motion.div>
	)
}

export default SongDetails
