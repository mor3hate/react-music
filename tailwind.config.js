/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			black: colors.black,
			white: colors.white,
			transparent: colors.transparent,
			blue: {
				500: '#F4F5FE',
			},
			dark: {
				700: '#15111E',
			},
		},
		extend: {
			transitionDuration: {
				DEFAULT: '200ms',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				scale: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: 0.3,
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)',
					},
				},
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scale: 'scale .45s ease-in-out',
			},
		},
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				'.text-shadow': {
					textShadow: '1px 1px rgba(0, 0, 0, 0.4)',
				},
				'.flex-default': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				},
				'.image-bg': {
					objectPosition: 'center',
					objectFit: 'cover',
					pointerEvents: 'none',
				},
			})
		}),
	],
}
