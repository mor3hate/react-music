import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { IHits } from '../search-data.interface'

import styles from './SearchList.module.scss'

interface ISearchList {
	hits: IHits[]
	onClick: () => void
}

const SearchList: FC<ISearchList> = ({ hits, onClick }) => {
	return (
		<div className={styles.list}>
			{hits.length ? (
				hits.slice(0, 5).map(item => (
					<Link href={`/songs/${item.track.key}`} key={item.track.key}>
						<a onClick={onClick} className={styles.list_item}>
							<Image
								src={item.track.images.coverart}
								width={50}
								style={{ borderRadius: '12px' }}
								height={50}
								objectFit='cover'
								objectPosition='top'
								alt={item.track.title}
							/>
							<span>{item.track.title}</span>
						</a>
					</Link>
				))
			) : (
				<div>Not found...</div>
			)}
		</div>
	)
}

export default SearchList
