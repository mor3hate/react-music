import { FC, useEffect, useState } from 'react'
import clsx from 'clsx'
import styles from './FavoriteButton.module.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { toggleFavorite } from '../../../store/favorites/favoriteSlice'
import { IFavoriteButton } from './favorite-button.interface'

const FavoriteButton: FC<IFavoriteButton> = ({
	songId,
	hub,
	title,
	artists,
	subtitle,
	images,
	index
}) => {
	const [isClicked, setIsClicked] = useState(false)
	const dispatch = useAppDispatch()
	const {
		favorites: { favorites }
	} = useAppSelector(state => state.persistedReducer)

	useEffect(() => {
		const favoriteExists = favorites.some(f => f.songId === songId)
		if (isClicked !== favoriteExists) setIsClicked(favoriteExists)
	}, [favorites, isClicked, songId])

	const clickHandler = () => {
		dispatch(
			toggleFavorite({
				songId,
				hub,
				title,
				artists,
				subtitle,
				images,
				index,
				key: songId
			})
		)
		setIsClicked(!isClicked)
	}

	return (
		<button
			onClick={clickHandler}
			className={clsx(styles.button, {
				[styles.clicked]: isClicked
			})}
			style={{ backgroundImage: `url('/heart-animation.png')` }}
		></button>
	)
}

export default FavoriteButton
