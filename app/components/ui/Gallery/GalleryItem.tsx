import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useAppDispatch } from '../../../hooks/reduxHooks'
import {
	setCurrentTrack,
	setToggleSong,
} from '../../../store/player/PlayerSlice'
import { ITopChartSong } from '../../../store/shazam/shazamCore-interface'
import PlayPause from '../Play-Pause/PlayPause'

import styles from './Gallery.module.scss'
import { motion } from 'framer-motion'

const GalleryItem: FC<ITopChartSong> = ({
	index,
	artists,
	images,
	subtitle,
	title,
	hub,
	songId,
}) => {
	const dispatch = useAppDispatch()

	const handlePlay = () => {
		dispatch(
			setCurrentTrack({
				uri: hub.actions[1].uri || '',
				name: title,
				index: index,
			})
		)

		dispatch(setToggleSong(true))
	}

	const handlePause = () => {
		dispatch(setToggleSong(false))
	}

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.7 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true }}
			className={styles.card}
		>
			<div className={styles.img_wrapper}>
				<Image
					src={images.coverart}
					alt={title}
					className={styles.img}
					layout='fill'
				/>
				<PlayPause onPause={handlePause} onPlay={handlePlay} title={title} />
			</div>
			<Link href={`/songs/${songId}`}>
				<a className={styles.card_title}>{title}</a>
			</Link>
			<Link
				href={artists.length ? `/artists/${artists[0].adamid}` : '/top-artists'}
			>
				<a className={styles.card_subtitle}>{subtitle}</a>
			</Link>
		</motion.div>
	)
}

export default GalleryItem
