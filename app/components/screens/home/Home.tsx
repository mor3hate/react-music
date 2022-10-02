import { FC } from 'react'
import { useGetTopChartsQuery } from '../../../store/shazam/shazamCore'
import Gallery from '../../ui/Gallery/Gallery'
import Heading from '../../ui/Heading/Heading'
import Meta from '../../ui/Meta/Meta'

const Home: FC = () => {
	const { data, isLoading, error } = useGetTopChartsQuery('world')
	return (
		<Meta
			title='Listen your best music'
			description='Discover, manage and share over 80 million tracks, including more than 4 million podcast titles for free'
		>
			<Heading title='Trending' withSub subText="What's hot🔥" />
			<Gallery items={data || []} />
		</Meta>
	)
}

export default Home
