import { FC } from 'react'
import { useAppSelector } from '../../../hooks/reduxHooks'
import MdIcon from '../MdIcon'
import { IPlayer } from './player-interface'

import styles from './Player.module.scss'
import { useAudio } from './usePlayer'
import clsx from 'clsx'

const Player: FC<IPlayer> = ({ songName, musicSource }) => {
	const { audioRef, togglePlay, changeVolume } = useAudio()
	const { currentTrackIsPlaying } = useAppSelector(state => state.player)
	return (
		<div className={styles.player}>
			<audio
				preload='metadata'
				className={styles.audio}
				ref={audioRef}
				src={musicSource}
			/>
			<div className={styles.controls}>
				<div className={styles.left}>
					<p
						className={clsx(styles.song_title, {
							[styles.run]: currentTrackIsPlaying,
						})}
					>
						{songName}
					</p>
				</div>
				<div className={styles.center}>
					<button>
						<MdIcon name='MdOutlineLoop' />
					</button>

					<button>
						<MdIcon name='MdFastRewind' />
					</button>

					<button onClick={togglePlay}>
						<MdIcon
							name={
								currentTrackIsPlaying
									? 'MdPauseCircleFilled'
									: 'MdPlayCircleFilled'
							}
						/>
					</button>

					<button>
						<MdIcon name='MdFastForward' />
					</button>
				</div>
				<div className={styles.right}>
					<MdIcon name='MdVolumeMute' />
					<input
						type='range'
						onChange={e => changeVolume(e)}
						className={styles.value}
					/>
					<MdIcon name='MdVolumeUp' />
				</div>
			</div>
		</div>
	)
}

export default Player
