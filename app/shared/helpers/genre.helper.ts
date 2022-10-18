import { IGenreItem } from '../../components/layout/Sidebar/genres/genre-interface'

export const checkGenre = (items: IGenreItem[], genre: string) => {
	const checkedGenre = items.filter(i => i.slug === genre).length
	return { checkedGenre }
}
