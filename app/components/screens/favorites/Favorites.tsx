import { FC } from 'react'
import { useAppSelector } from '../../../hooks/reduxHooks'
import Gallery from '../../ui/Gallery/Gallery'
import Heading from '../../ui/Heading/Heading'
import Meta from '../../ui/Meta/Meta'

const Favorites: FC = () => {
	const {
		favorites: { favorites }
	} = useAppSelector(state => state.persistedReducer)

	return (
		<Meta
			title='Listen to your favorite songs'
			description='Discover, manage and share over 80 million tracks, including more than 4 million podcast titles for free'
		>
			<Heading title='Favorites' withSub subText='Enjoy it!💓' />
			<Gallery items={favorites || []} />
		</Meta>
	)
}

export default Favorites
