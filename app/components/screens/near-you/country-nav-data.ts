import { ICountryNavMenu } from '../../ui/CountryNav/country-nav-interface'

export const countryMenu: ICountryNavMenu = {
	items: [
		{
			name: 'USA',
			imagePath: '/us.svg',
			link: '/near-you/us',
			slug: 'us',
		},
		{
			name: 'Belgium',
			imagePath: '/be.svg',
			link: '/near-you/be',
			slug: 'be',
		},
		{
			name: 'Germany',
			imagePath: '/gr.svg',
			link: '/near-you/gr',
			slug: 'gr',
		}
	],
}
