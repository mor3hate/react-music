import { useRouter } from 'next/router'
import { FC } from 'react'
import ArtistDetails from '../../ui/ArtistDetails/ArtistDetails'
import ArtistSongs from '../../ui/ArtistDetails/ArtistSongs/ArtistSongs'
import Heading from '../../ui/Heading/Heading'
import Meta from '../../ui/Meta/Meta'
import SubHeading from '../../ui/SubHeading/SubHeading'
import { useArtist } from './useArtist'
import WaveLoader from '../../ui/LoaderWave/WaveLoader'

const ArtistCard: FC = () => {
	const { query } = useRouter()

	const { id } = query

	const artistId = Number(id)

	const { data, isLoading } = useArtist(artistId)

	return (
		<Meta
			title='Artist page'
			description='All the information about various artists'
		>
			<Heading title='Artist page' />
			<div style={{ paddingBottom: '200px' }}>
				{isLoading ? (
					<WaveLoader />
				) : (
					<ArtistDetails attributes={data![0].attributes} />
				)}
				<SubHeading title='Related songs' />
				{isLoading ? (
					<WaveLoader />
				) : (
					<ArtistSongs data={data![0].views['top-songs'].data || []} />
				)}
			</div>
		</Meta>
	)
}

export default ArtistCard
