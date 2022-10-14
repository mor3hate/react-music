import { setCurrentTrack, setToggleSong } from '../store/player/PlayerSlice'
import { useAppDispatch } from './reduxHooks'

export const usePlay = () => {
	const dispatch = useAppDispatch()

	const handlePlay = (uri: string, name: string, index: number) => {
		dispatch(
			setCurrentTrack({
				uri: uri,
				name: name,
				index: index,
			})
		)

		dispatch(setToggleSong(true))
	}

	const handlePause = () => {
		dispatch(setToggleSong(false))
	}

	return { handlePlay, handlePause }
}
