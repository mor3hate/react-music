import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'
import FavIcon from '../shared/FavIcon'
import NextNProgress from 'nextjs-progressbar'

const HeadProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<NextNProgress
				color='#15111E'
				startPosition={0.3}
				stopDelayMs={300}
				height={3}
				showOnShallow={false}
			/>
			<Head>
				<FavIcon />
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='application-name' content='React Music' />
				<meta name='theme-color' content={'#F4F5FE'} />
				<meta name='apple-mobile-web-app-capable' content='yes' />
				<meta name='apple-mobile-web-app-status-bar-style' content='default' />
				<meta name='apple-mobile-web-app-title' content='Mor3Music' />
				<meta name='mobile-web-app-capable' content='yes' />
				<meta name='msapplication-config' content='/browserconfig.xml' />
				<meta name='msapplication-tap-highlight' content='no' />
			</Head>
			{children}
		</>
	)
}

export default HeadProvider
