import { useRouter } from 'next/router'
import { FC } from 'react'
import ArtistDetails from '../../ui/ArtistDetails/ArtistDetails'
import ArtistSongs from '../../ui/ArtistDetails/ArtistSongs/ArtistSongs'

import Heading from '../../ui/Heading/Heading'
import Meta from '../../ui/Meta/Meta'
import SubHeading from '../../ui/SubHeading/SubHeading'
import { IArtists, Song } from './artist-interface'

export interface IArtistCard {
	artist: IArtists
	artistId: number
}

const ArtistCard: FC<IArtistCard> = ({ artist, artistId }) => {
	// const { query } = useRouter()
	// const { id } = query
	// console.log(id)
	//@ts-ignore
	const songs = Object.entries<Song>(artist.songs)
	return (
		<Meta
			title={artist.artists[artistId].attributes.name}
			description='All the information about various artists'
		>
			<Heading title='Artist page' />
			<ArtistDetails attributes={artist.artists[artistId].attributes} />
			<SubHeading title='Related songs' />
			<ArtistSongs songs={songs} />
		</Meta>
	)
}

export default ArtistCard
