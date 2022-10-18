import { motion } from 'framer-motion'
import { FC } from 'react'
import Logo from './Logo'
import MenuContainer from './Menu/MenuContainer'

const Navigation: FC<{ show: boolean }> = ({ show }) => {
	return (
		<motion.aside
			animate={
				show
					? {
							left: 0,
							opacity: 1,
					  }
					: {
							left: -500,
							opacity: 0,
					  }
			}
			transition={{ duration: 0.5 }}
		>
			<Logo />
			<MenuContainer />
		</motion.aside>
	)
}

export default Navigation
