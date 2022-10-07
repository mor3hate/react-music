import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { IChart } from '../../../shared/types/charts.page.type'
import { setAllSongs } from '../../../store/player/PlayerSlice'

import Gallery from '../../ui/Gallery/Gallery'
import Heading from '../../ui/Heading/Heading'
import Meta from '../../ui/Meta/Meta'

const GenreCharts: FC<IChart> = ({ charts }) => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(setAllSongs(charts))
	}, [dispatch, charts])

	const { allSongs } = useAppSelector(state => state.persistedReducer)

	return (
		<Meta
			title='Charts by genre'
			description='Get all top charts for your favorite genre!'
		>
			<Heading title='All your favorite genres' />

			<Gallery items={allSongs} />
		</Meta>
	)
}

export default GenreCharts
