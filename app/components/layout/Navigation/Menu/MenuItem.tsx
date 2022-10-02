import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import MdIcon from '../../../ui/MdIcon'
import { IMenuItem } from './menu-interface'
import clsx from 'clsx'

import styles from './Menu.module.scss'

const MenuItem: FC<{ item: IMenuItem }> = ({ item: { title, link, icon } }) => {
	const { asPath } = useRouter()

	return (
		<li
			className={clsx(styles.menu_item, {
				[styles.active]: asPath === link,
			})}
		>
			<Link href={link}>
				<a>
					<MdIcon name={icon} />
					<span>{title}</span>
				</a>
			</Link>
		</li>
	)
}

export default MenuItem
