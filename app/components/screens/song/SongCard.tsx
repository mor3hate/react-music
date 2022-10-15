import { useRouter } from 'next/router'
import { FC } from 'react'
import Heading from '../../ui/Heading/Heading'
import WaveLoader from '../../ui/LoaderWave/WaveLoader'
import Meta from '../../ui/Meta/Meta'
import RelatedSongs from '../../ui/RelatedSongs/RelatedSongs'
import SongDetails from '../../ui/SongDetails/SongDetails'
import SongLyrics from '../../ui/SongDetails/SongLyrics/SongLyrics'
import SubHeading from '../../ui/SubHeading/SubHeading'
import { useSong } from './useSong'

const SongCard: FC = () => {
	const { query } = useRouter()

	const { id } = query

	const songId = Number(id)

	const { data, isLoading, relatedData, isLoadingRelated } = useSong(songId)

	return (
		<Meta
			title={data?.title || 'Song Page'}
			description='Identify the music playing around you. Explore the music you love. Discover songs, lyrics, and artists.'
		>
			<Heading title='Song page' />
			<div style={{ paddingBottom: '200px' }}>
				{isLoading ? <WaveLoader /> : <SongDetails song={data!} />}
				<SubHeading title='Lyrics' />
				{isLoading ? (
					<WaveLoader />
				) : (
					<SongLyrics sections={data?.sections || []} />
				)}
				<SubHeading title='Related songs' />
				{isLoadingRelated ? (
					<WaveLoader />
				) : (
					<RelatedSongs menu={relatedData || []} />
				)}
			</div>
		</Meta>
	)
}

export default SongCard
