import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '../../../assets/img/spotify.svg'

const Logo: FC = () => {
	return (
		<Link href='/'>
			<a>
				<Image src={logoImage} alt='logo' width={200} height={60} />
			</a>
		</Link>
	)
}

export default Logo
