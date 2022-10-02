import Image from 'next/image'
import { FC } from 'react'

import avatar from '../../../../assets/img/photo_2022-03-21_14-39-37.jpg'
import MdIcon from '../../../ui/MdIcon'
import styles from './AuthItems.module.scss'

const AuthItems: FC = () => {
	return (
		<div className={styles.user_interface}>
			<div>
				<Image src={avatar} alt='avatar' className='image-bg' />
			</div>
			<p>Mor3Hate</p>
			<MdIcon name='MdArrowForwardIos' />
		</div>
	)
}

export default AuthItems
