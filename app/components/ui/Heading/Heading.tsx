import { FC } from 'react'

import styles from './Heading.module.scss'
import clsx from 'clsx'

interface IHeading {
	title: string
	withSub?: boolean
	subText?: string
}

const Heading: FC<IHeading> = ({ title, withSub, subText }) => {
	return (
		<>
			{withSub && <p className={styles.subText}>{subText}</p>}
			<h1
				className={clsx(styles.heading, {
					[styles.withMargin]: !withSub,
				})}
			>
				{title}
			</h1>
		</>
	)
}

export default Heading
