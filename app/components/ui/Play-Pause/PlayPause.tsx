import { FC, useState } from 'react'
import { useAppSelector } from '../../../hooks/reduxHooks'
import MdIcon from '../MdIcon'
import { IPlayPause } from './playPause-interface'

import styles from './PlayPause.module.scss'
import clsx from 'clsx'

const PlayPause: FC<IPlayPause> = ({ onPlay, onPause, title }) => {
	const { currentTrackIsPlaying, currentTrack } = useAppSelector(
		state => state.persistedReducer
	)

	const [show, setIsShow] = useState(false)

	const handleMouseLeave = () => {
		if (title === currentTrack.name) {
			setIsShow(true)
		} else {
			setIsShow(false)
		}
	}

	return (
		<div
			className={clsx(styles.block, {
				[styles.active]: title === currentTrack.name,
			})}
			onMouseEnter={() => setIsShow(true)}
			onMouseLeave={handleMouseLeave}
		>
			{show && (
				<>
					{currentTrackIsPlaying && title === currentTrack.name ? (
						<button onClick={onPause}>
							<MdIcon name='MdPauseCircleFilled' />
						</button>
					) : (
						<button onClick={onPlay}>
							<MdIcon name='MdPlayCircleFilled' />
						</button>
					)}
				</>
			)}
		</div>
	)
}

export default PlayPause
