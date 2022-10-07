import { FC, PropsWithChildren } from 'react'
import { useAppSelector } from '../../hooks/reduxHooks'
import Player from '../ui/Player/Player'

import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'
import { CSSTransition } from 'react-transition-group'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	const {
		currentTrack: { index },
		isPlaying,
		allSongs,
	} = useAppSelector(state => state.persistedReducer)

	return (
		<div className={styles.layout}>
			<Navigation />
			<main className={styles.central}>{children}</main>
			<Sidebar />
			<CSSTransition
				in={isPlaying}
				timeout={300}
				classNames='show__blocks'
				unmountOnExit
			>
				<Player
					songName={allSongs[index]?.title}
					musicSource={allSongs[index]?.hub.actions[1].uri || ''}
				/>
			</CSSTransition>
		</div>
	)
}

export default Layout
