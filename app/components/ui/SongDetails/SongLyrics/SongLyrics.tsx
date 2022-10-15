import { FC } from 'react'
import { ISections } from './song-lyrics-interface'

import styles from './SongLyrics.module.scss'

const SongLyrics: FC<ISections> = ({ sections }) => {
	return (
		<div className={styles.lyrics}>
			{sections[1].text
				? sections[1].text.slice(0, 16).map(t => <p>{t}</p>)
				: 'Sorry, lyrics are not found'}
			...
		</div>
	)
}

export default SongLyrics
