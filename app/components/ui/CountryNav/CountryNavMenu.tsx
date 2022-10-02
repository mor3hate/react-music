import { FC } from 'react'
import { ICountryNavMenu } from './country-nav-interface'
import CountryNavItem from './CountryNavItem'

import styles from './CountryNav.module.scss'

const CountryNavMenu: FC<{ menu: ICountryNavMenu }> = ({ menu: { items } }) => {
	return (
		<nav className={styles.country_menu_parent}>
			<ul className={styles.country_menu}>
				{items.map(item => (
					<CountryNavItem item={item} key={item.name} />
				))}
			</ul>
		</nav>
	)
}

export default CountryNavMenu
