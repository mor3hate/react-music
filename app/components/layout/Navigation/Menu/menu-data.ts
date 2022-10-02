import { IMenu } from './menu-interface'

export const menuMain: IMenu = {
	items: [
		{
			title: 'Home',
			link: '/',
			icon: 'MdHomeFilled',
		},
		{
			title: 'Near you',
			link: '/near-you/us',
			icon: 'MdExplore',
		},
	],
}

export const menuCollection: IMenu = {
	title: 'Your Collection',
	items: [
		{
			title: 'Favorite Songs',
			link: '/favorite',
			icon: 'MdFavoriteBorder',
		},
		{
			title: 'Artists',
			link: '/artists',
			icon: 'MdPeopleAlt',
		},
		{
			title: 'Albums',
			link: '/albums',
			icon: 'MdHotelClass',
		},
	],
}
