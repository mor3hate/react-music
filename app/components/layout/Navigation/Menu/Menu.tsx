import { FC } from 'react'
import { IMenu } from './menu-interface'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'

const Menu: FC<{ menu: IMenu }> = ({ menu: { title, items } }) => {
	return (
		<nav className={styles.menu}>
			{title && <div className={styles.menu_title}>{title}</div>}
			<ul>
				{items.map(item => (
					<MenuItem key={item.link} item={item} />
				))}
			</ul>
		</nav>
	)
}

export default Menu
