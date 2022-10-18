import { motion } from 'framer-motion'
import { FC } from 'react'
import MdIcon from '../MdIcon'
import { IHamburger } from './hamburger-interface'

import styles from './Hamburger.module.scss'

const Hamburger: FC<IHamburger> = ({ iconVariant, onClick }) => {
	return (
		<motion.button
			className={styles.hamburger}
			onClick={onClick}
			whileTap={{ scale: 0.9 }}
		>
			<MdIcon name={iconVariant === 'open' ? 'MdMenuOpen' : 'MdMenu'} />
		</motion.button>
	)
}

export default Hamburger
