import { FC } from 'react'

import styles from './SubHeading.module.scss'

interface ISubHeading {
	title: string
}

const SubHeading: FC<ISubHeading> = ({ title }) => {
	return <h2 className={styles.sub_heading}>{title}</h2>
}

export default SubHeading
