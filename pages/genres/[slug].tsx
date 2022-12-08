import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { genresMenu } from '../../app/components/layout/Sidebar/genres/genre-interface'
import GenreCharts from '../../app/components/screens/genre-charts/GenreCharts'
import { TopChartService } from '../../app/services/top-chart.service'
import { IChart } from '../../app/shared/types/charts.page.type'
import { ITopChartSong } from '../../app/store/shazam/shazamCore-interface'

const GenreChartPage: NextPage<IChart> = ({ charts }) => {
	return <GenreCharts charts={charts} />
}

export default GenreChartPage

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { items } = genresMenu
		const paths = items.map(i => ({
			params: { slug: i.slug }
		}))

		return { paths, fallback: 'blocking' }
	} catch (error) {
		return {
			paths: [],
			fallback: false
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: chartsData } = await TopChartService.GetTopChartsGenre(
			String(params?.slug).toUpperCase()
		)

		const charts: ITopChartSong[] = chartsData.slice(0, 21).map((item, i) => ({
			artists: item.artists || [],
			hub: item.hub,
			images: item.images || '',
			index: i,
			key: item.key,
			subtitle: item.subtitle,
			title: item.title,
			songId: item.key
		}))

		return {
			props: {
				charts
			},
			revalidate: 40
		}
	} catch (error) {
		return {
			props: {
				charts: []
			}
		}
	}
}
