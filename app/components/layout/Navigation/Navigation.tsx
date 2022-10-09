import { motion, AnimatePresence } from 'framer-motion'
import { FC } from 'react'
import Logo from './Logo'
import MenuContainer from './Menu/MenuContainer'

interface INavigation {
	show: boolean
}

const Navigation: FC<INavigation> = ({ show }) => {
	return (
		<AnimatePresence>
			<motion.aside
				animate={show ? { x: 0 } : { x: '-100%' }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Logo />
				<MenuContainer />
			</motion.aside>
		</AnimatePresence>
	)
}

export default Navigation
