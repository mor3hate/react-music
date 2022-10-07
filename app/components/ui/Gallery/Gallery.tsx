import { FC } from 'react'
import { ITopChartSong } from '../../../store/shazam/shazamCore-interface'
import GalleryItem from './GalleryItem'

import styles from './Gallery.module.scss'

interface IGallery {
	items: ITopChartSong[]
}

const Gallery: FC<IGallery> = ({ items }) => {
	return (
		<div className={styles.gallery}>
			{items.map((item, i) => (
				<GalleryItem
					index={i}
					hub={item.hub}
					artists={item.artists}
					images={item.images}
					songId={item.key}
					key={item.key}
					subtitle={item.subtitle}
					title={item.title}
				/>
			))}
		</div>
	)
}

export default Gallery
