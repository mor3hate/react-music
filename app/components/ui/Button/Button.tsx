import { motion } from 'framer-motion'
import { FC } from 'react'

import styles from './Button.module.scss'

interface IButton {
	onClick?: () => void
	title: string
}

const Button: FC<IButton> = ({ onClick, title }) => {
	return (
		<motion.button
			className={styles.btn}
			onClick={onClick}
			whileHover={{ scale: 0.9 }}
			whileTap={{ scale: 1.1 }}
		>
			{title}
		</motion.button>
	)
}

export default Button
