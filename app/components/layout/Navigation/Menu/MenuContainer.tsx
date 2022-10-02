import { FC } from 'react'
import Menu from './Menu'
import { menuMain, menuCollection } from './menu-data'

import styles from './Menu.module.scss'

const MenuContainer: FC = () => {
	return (
		<div className={styles.container}>
			<Menu menu={menuMain} />
			<Menu menu={menuCollection} />
		</div>
	)
}

export default MenuContainer
