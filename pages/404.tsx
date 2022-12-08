import { NextPage } from 'next'
import Link from 'next/link'
import Meta from '../app/components/ui/Meta/Meta'

const Error404Page: NextPage = () => {
	return (
		<div className='error_page'>
			<Meta title='Page not found'>
				<h1>Lost your way?</h1>
				<p>We can&apos;t find the page you&apos;re looking for</p>
				<p>error404</p>
				<Link href='/'>
					<a>Go home page &#8594;</a>
				</Link>
			</Meta>
		</div>
	)
}

export default Error404Page
