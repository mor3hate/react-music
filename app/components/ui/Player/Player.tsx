import { FC } from 'react'
import { useAppSelector } from '../../../hooks/reduxHooks'
import MdIcon from '../MdIcon'
import { IPlayer } from './player-interface'

import styles from './Player.module.scss'
import { useAudio } from './usePlayer'
import clsx from 'clsx'
import { getTime } from '../../../shared/helpers/player-time.helper'

const Player: FC<IPlayer> = ({ songName, musicSource }) => {
	const {
		audioRef,
		togglePlay,
		changeVolume,
		volume,
		audioTime,
		currentTime,
		progress,
		changeProgressInput,
		makeSongLoop,
		loop,
		next,
		prev,
	} = useAudio()
	const { currentTrackIsPlaying } = useAppSelector(
		state => state.persistedReducer
	)

	return (
		<div className={styles.player}>
			<audio
				preload='metadata'
				ref={audioRef}
				src={musicSource}
				loop={loop}
				onEnded={next}
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
					<button
						onClick={makeSongLoop}
						className={clsx({
							[styles.looped]: loop,
						})}
						title='Loop your track!(f)'
					>
						<MdIcon name='MdOutlineLoop' />
					</button>

					<button title='Back(<-)' onClick={prev}>
						<MdIcon name='MdFastRewind' />
					</button>

					<button onClick={togglePlay} title='Pause and play(space)'>
						<MdIcon
							name={
								currentTrackIsPlaying
									? 'MdPauseCircleFilled'
									: 'MdPlayCircleFilled'
							}
						/>
					</button>

					<button title='Next(->)' onClick={next}>
						<MdIcon name='MdFastForward' />
					</button>
				</div>
				<div className={styles.right}>
					<MdIcon name='MdVolumeMute' />
					<input
						type='range'
						defaultValue={volume}
						onChange={e => changeVolume(e)}
						className={styles.value}
					/>
					<MdIcon name='MdVolumeUp' />
				</div>
			</div>
			<div className={styles.progressBar}>
				<p>{getTime(currentTime)}</p>
				<input
					type='range'
					className={styles.value}
					value={progress}
					onInput={e => changeProgressInput(e)}
				/>
				<p>{getTime(audioTime)}</p>
			</div>
		</div>
	)
}

export default Player
