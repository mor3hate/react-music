import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { countryMenu } from '../../app/components/screens/near-you/country-nav-data'
import NearYou from '../../app/components/screens/near-you/NearYou'
import { TopChartService } from '../../app/services/top-chart.service'
import { IChart } from '../../app/shared/types/charts.page.type'
import { ITopChartSong } from '../../app/store/shazam/shazamCore-interface'

const CountryChartPage: NextPage<IChart> = ({ charts }) => {
	return <NearYou charts={charts} />
}

export default CountryChartPage

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { items } = countryMenu
		const paths = items.map(i => ({
			params: { slug: i.slug },
		}))

		return { paths, fallback: 'blocking' }
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: chartsData } = await TopChartService.GetTopChartsCountry(
			String(params?.slug).toUpperCase()
		)

		const charts: ITopChartSong[] = chartsData.slice(0, 21).map((item, i) => ({
			artists: item.artists || '',
			hub: item.hub,
			images: item.images || '/music.png',
			index: i,
			key: item.key,
			subtitle: item.subtitle,
			title: item.title,
			songId: item.key,
		}))

		return {
			props: {
				charts,
			},
			revalidate: 40,
		}
	} catch (error) {
		return {
			props: {
				charts: [],
			},
		}
	}
}
