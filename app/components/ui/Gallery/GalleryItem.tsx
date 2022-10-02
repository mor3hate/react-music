import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useAppDispatch } from '../../../hooks/reduxHooks'
import {
	setPlay,
	setCurrentTrack,
	setToggleSong,
	setCurrentTrackName,
} from '../../../store/player/PlayerSlice'
import { ITopChartSong } from '../../../store/shazam/shazamCore-interface'
import PlayPause from '../Play-Pause/PlayPause'

import styles from './Gallery.module.scss'

const GalleryItem: FC<ITopChartSong> = ({
	artists,
	images,
	key,
	subtitle,
	title,
	hub: { actions },
}) => {
	const dispatch = useAppDispatch()

	const handlePlay = () => {
		dispatch(setCurrentTrack(actions[1].uri || ''))
		dispatch(setCurrentTrackName(title))
		dispatch(setToggleSong(true))
		dispatch(setPlay(true))
	}

	const handlePause = () => {
		dispatch(setToggleSong(false))
	}

	return (
		<div className={styles.card}>
			<div className={styles.img_wrapper}>
				<Image
					src={images.coverart}
					alt={title}
					className={styles.img}
					layout='fill'
				/>
				<PlayPause onPause={handlePause} onPlay={handlePlay} title={title} />
			</div>
			<Link href={`/songs/${key}`}>
				<a className={styles.card_title}>{title}</a>
			</Link>
			<Link
				href={artists.length ? `/artists/${artists[0].adamid}` : '/top-artists'}
			>
				<a className={styles.card_subtitle}>{subtitle}</a>
			</Link>
		</div>
	)
}

export default GalleryItem
