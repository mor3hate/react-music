import { FC } from 'react'
import { IRelatedSongsMenu } from './related-song.interface'
import RelatedSongItem from './RelatedSongItem'

import styles from './RelatedSongs.module.scss'

const RelatedSongs: FC<IRelatedSongsMenu> = ({ menu }) => {
	return (
		<div className={styles.related_song_menu}>
			{menu.map((item, i) => (
				<RelatedSongItem
					index={i}
					title={item.title}
					hub={item.hub}
					key={item.title}
				/>
			))}
		</div>
	)
}

export default RelatedSongs
