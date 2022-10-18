import { FC, PropsWithChildren, useState } from 'react'
import { useAppSelector } from '../../hooks/reduxHooks'
import Player from '../ui/Player/Player'

import { CSSTransition } from 'react-transition-group'
import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'
import Hamburger from '../ui/Hamburger/Hamburger'
import SearchField from '../ui/SearchField/SearchField'
import Search from './Search/Search'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	const { currentTrack, isPlaying } = useAppSelector(
		state => state.persistedReducer
	)

	const [show, setIsShow] = useState(true)

	return (
		<div className={styles.layout}>
			<Hamburger
				iconVariant={show ? 'open' : 'close'}
				onClick={() => setIsShow(!show)}
				show={show}
			/>
			<Navigation show={show} />
			<main className={styles.central}>{children}</main>
			<Sidebar />
			<CSSTransition
				in={isPlaying}
				timeout={200}
				classNames='show__blocks'
				unmountOnExit
			>
				<Player songName={currentTrack.name} musicSource={currentTrack.uri} />
			</CSSTransition>
			<Search />
		</div>
	)
}

export default Layout
