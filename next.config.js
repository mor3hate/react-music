/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
	dest: 'public',
})

module.exports = withPWA({
	reactStrictMode: true,
	swcMinify: true,
	env: {
		RAPID_KEY: process.env.REACT_RAPID_KEY,
		SERVER_URL: process.env.REACT_SERVER_URL,
	},
	images: {
		domains: [
			'is1-ssl.mzstatic.com',
			'is5-ssl.mzstatic.com',
			'is4-ssl.mzstatic.com',
			'is3-ssl.mzstatic.com',
			'is2-ssl.mzstatic.com',
		],
	},
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true,
	},
})
