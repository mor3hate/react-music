import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { setAllSongs } from '../../../store/player/PlayerSlice'
import { ITopChartSong } from '../../../store/shazam/shazamCore-interface'
import Gallery from '../../ui/Gallery/Gallery'
import Heading from '../../ui/Heading/Heading'
import Meta from '../../ui/Meta/Meta'

export interface IHome {
	songs: ITopChartSong[]
}

const Home: FC<IHome> = ({ songs }) => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(setAllSongs(songs))
	}, [dispatch, songs])

	const {
		player: { allSongs }
	} = useAppSelector(state => state.persistedReducer)

	return (
		<Meta
			title='Listen your best music'
			description='Discover, manage and share over 80 million tracks, including more than 4 million podcast titles for free'
		>
			<Heading title='Trending' withSub subText="What's hot🔥" />
			<Gallery items={allSongs} />
		</Meta>
	)
}

export default Home
