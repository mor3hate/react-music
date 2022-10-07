import { FC, useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './ErrorComponent.module.scss'

interface IError {
	error: string
}

const ErrorComponent: FC<IError> = ({ error }) => {
	const [show, setIsShow] = useState(false)

	useEffect(() => {
		if (error) setIsShow(true)

		const timer = setTimeout(() => {
			setIsShow(false)
		}, 5000)

		return () => {
			clearTimeout(timer)
		}
	}, [error])

	return (
		<CSSTransition
			in={show}
			timeout={400}
			classNames='show__blocks'
			unmountOnExit
		>
			<div className={styles.error_block}>
				<h3>Something went wrong!</h3>
				<p>{error}</p>
				<button onClick={() => setIsShow(false)}>X</button>
			</div>
		</CSSTransition>
	)
}

export default ErrorComponent
