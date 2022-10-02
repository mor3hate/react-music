import { FC } from 'react'
import AuthItems from './AuthItems/AuthItems'
import Logo from './Logo'
import MenuContainer from './Menu/MenuContainer'

const Navigation: FC = () => {
	return (
		<aside>
			<Logo />
			<MenuContainer />
			<AuthItems />
		</aside>
	)
}

export default Navigation
