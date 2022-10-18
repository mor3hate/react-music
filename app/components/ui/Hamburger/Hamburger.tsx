import { motion } from 'framer-motion'
import { FC } from 'react'
import MdIcon from '../MdIcon'
import { IHamburger } from './hamburger-interface'

import styles from './Hamburger.module.scss'
import clsx from 'clsx'

const Hamburger: FC<IHamburger> = ({ iconVariant, onClick, show }) => {
	return (
		<motion.button
			className={clsx(styles.hamburger, {
				[styles.with_circle]: !show,
			})}
			onClick={onClick}
			whileTap={{ scale: 0.9 }}
			animate={show ? { x: 0 } : { left: 3 }}
			transition={{ duration: 0.5 }}
		>
			<MdIcon name={iconVariant === 'open' ? 'MdMenuOpen' : 'MdMenu'} />
		</motion.button>
	)
}

export default Hamburger
