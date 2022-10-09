import Link from 'next/link'
import { FC } from 'react'
import { ICountryNavItem } from './country-nav-interface'

import styles from './CountryNav.module.scss'
import clsx from 'clsx'
import { useRouter } from 'next/router'

const CountryNavItem: FC<{ item: ICountryNavItem }> = ({
	item: { name, imagePath, link },
}) => {
	const { asPath } = useRouter()
	return (
		<li
			className={clsx(styles.nav_item, {
				[styles.active]: asPath === link,
			})}
		>
			<Link href={link}>
				<a>
					<span
						style={{
							backgroundImage: `url(${imagePath})`,
							height: '10px',
							width: '15px',
						}}
					></span>
					{name}
				</a>
			</Link>
		</li>
	)
}

export default CountryNavItem
