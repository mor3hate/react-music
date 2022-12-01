import type { NextPage } from 'next'
import Home, { IHome } from '../app/components/screens/home/Home'
import { TopChartService } from '../app/services/top-chart.service'
import { ITopChartSong } from '../app/store/shazam/shazamCore-interface'

const HomePage: NextPage<IHome> = ({ songs }) => {
	return <Home songs={songs} />
}

export default HomePage

export async function getStaticProps() {
	try {
		const { data: songsData } = await TopChartService.GetTopChartsWorld()

		const songs: ITopChartSong[] = songsData.slice(0,21).map((item, i) => ({
			artists: item.artists || null,
			hub: item.hub,
			images: item.images || null,
			index: i,
			key: item.key,
			subtitle: item.subtitle,
			title: item.title,
			songId: item.key,
		}))

		return {
			props: { songs },
			revalidate: 40,
		}
	} catch (error) {
		return {
			props: {
				songs: [],
			},
		}
	}
}
