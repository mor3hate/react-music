import { NextPage } from 'next'
import Link from 'next/link'
import Meta from '../app/components/ui/Meta/Meta'

const Error500Page: NextPage = () => {
	return (
		<div className='error_page'>
			<Meta title='Internal Server Error'>
				<h1>Internal Server Error</h1>
				<p>error500</p>
				<Link href='/'>
					<a>Go home page &#8594;</a>
				</Link>
			</Meta>
		</div>
	)
}

export default Error500Page
