import { useRouter } from 'next/router'
import { FC } from 'react'
import ArtistDetails from '../../ui/ArtistDetails/ArtistDetails'
import ArtistSongs from '../../ui/ArtistDetails/ArtistSongs/ArtistSongs'
import Heading from '../../ui/Heading/Heading'
import Meta from '../../ui/Meta/Meta'
import SubHeading from '../../ui/SubHeading/SubHeading'
import { Song } from './artist-interface'
import { useArtist } from './useArtist'
import WaveLoader from '../../ui/LoaderWave/WaveLoader'

const ArtistCard: FC = () => {
	const { query } = useRouter()

	const { id } = query

	const artistId = Number(id)

	const { data, isLoading } = useArtist(artistId)

	//@ts-ignore
	const songs = Object.entries<Song>(data?.songs || [])
	return (
		<Meta
			title={data?.artists[artistId].attributes.name || 'Artist page'}
			description='All the information about various artists'
		>
			<Heading title='Artist page' />
			<div style={{ paddingBottom: '200px' }}>
				{isLoading ? (
					<WaveLoader />
				) : (
					<ArtistDetails attributes={data?.artists[artistId].attributes!} />
				)}
				<SubHeading title='Related songs' />
				{isLoading ? <WaveLoader /> : <ArtistSongs songs={songs} />}
			</div>
		</Meta>
	)
}

export default ArtistCard
