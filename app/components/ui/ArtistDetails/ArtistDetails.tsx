import Image from 'next/image'
import { FC } from 'react'
import { IAttributes } from '../../screens/artist/artist-interface'

import styles from './ArtistDetails.module.scss'
import clsx from 'clsx'
import { TypeAnimation } from 'react-type-animation'

const ArtistDetails: FC<{ attributes: IAttributes }> = ({ attributes }) => {
	return (
		<div className={styles.artist_details}>
			<div className={styles.pulse_circle}></div>
			<div
				className={clsx(styles.pulse_circle, styles.pulse_circle_inner)}
			></div>
			<div className={styles.artist_detailsImg}>
				<Image
					src={
						attributes
							? attributes.artwork.url
									.replace('{w}', '150')
									.replace('{h}', '150')
							: ''
					}
					className={styles.img}
					layout='fill'
					alt='artist-image'
					draggable={false}
				/>
			</div>
			<TypeAnimation
				sequence={[1000, attributes ? attributes.name : '']}
				wrapper='p'
				cursor={false}
				speed={30}
			/>
		</div>
	)
}

export default ArtistDetails
