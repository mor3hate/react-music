import { FC } from 'react'
import { useGetTopChartsByCountryQuery } from '../../../store/shazam/shazamCore'
import CountryNavMenu from '../../ui/CountryNav/CountryNavMenu'
import Gallery from '../../ui/Gallery/Gallery'
import Heading from '../../ui/Heading/Heading'
import Meta from '../../ui/Meta/Meta'
import { countryMenu } from './country-nav-data'

const BeCountry: FC = () => {
	const { data } = useGetTopChartsByCountryQuery('BE')
	return (
		<Meta
			title='Discover charts near you'
			description='Charts in your country and best quality music'
		>
			<Heading title='Choose your country' />
			<CountryNavMenu menu={countryMenu} />
			<Gallery items={data || []} />
		</Meta>
	)
}

export default BeCountry
