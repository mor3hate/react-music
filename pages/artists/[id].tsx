import { GetServerSideProps, NextPage } from 'next'
import ArtistCard, {
	IArtistCard,
} from '../../app/components/screens/artist/ArtistCard'
import { ArtistService } from '../../app/services/artist.service'

const ArtistCardPage: NextPage<IArtistCard> = ({ artist, artistId }) => {
	return <ArtistCard artist={artist} artistId={artistId} />
}

export default ArtistCardPage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	try {
		const artistId = Number(params?.id)

		const { data: artist } = await ArtistService.GetArtistById(artistId)

		return {
			props: {
				artist,
				artistId,
			},
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}
