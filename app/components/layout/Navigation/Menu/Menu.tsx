import { FC } from 'react'
import { IMenu } from './menu-interface'
import { motion } from 'framer-motion'
import styles from './Menu.module.scss'
import MenuItem from './MenuItem'

const Menu: FC<{ menu: IMenu }> = ({ menu: { title, items } }) => {
	return (
		<motion.nav
			initial={{ opacity: 0, x: -500 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 1.5 }}
			className={styles.menu}
		>
			{title && <div className={styles.menu_title}>{title}</div>}
			<ul>
				{items.map(item => (
					<MenuItem key={item.link} item={item} />
				))}
			</ul>
		</motion.nav>
	)
}

export default Menu
