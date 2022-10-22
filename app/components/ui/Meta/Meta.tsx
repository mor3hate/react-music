import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC, ReactNode } from 'react'
import { titleMerge } from '../../../shared/helpers/title.helper'

interface IMeta {
	title: string
	description?: string
	children: ReactNode
}

const Meta: FC<IMeta> = ({ title, description, children }) => {
	const { asPath } = useRouter()
	const currentUrl = `https://react-music-mor3hate.vercel.app/${asPath}`

	return (
		<>
			<Head>
				<title itemProp='headline'>{titleMerge(title)}</title>
				<>
					<meta
						itemProp='description'
						name='description'
						content={description}
					/>
					<link rel='canonical' href={currentUrl} />
					<meta name='og:title' content={titleMerge(title)} />
					<meta name='og:url' content={currentUrl} />
					<meta name='og:site_name' content='React Music' />
					<meta name='og:description' content={description} />
				</>
			</Head>
			{children}
		</>
	)
}

export default Meta
