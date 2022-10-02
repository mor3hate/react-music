import {
	ChangeEvent,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { setToggleSong } from '../../../store/player/PlayerSlice'

export const useAudio = () => {
	const audioRef = useRef<HTMLAudioElement>(null)

	const [volume, setVolume] = useState(0)

	const { currentTrackIsPlaying } = useAppSelector(state => state.player)

	const dispatch = useAppDispatch()

	useEffect(() => {
		if (currentTrackIsPlaying) {
			audioRef.current?.play()
		} else {
			audioRef.current?.pause()
		}
	}, [currentTrackIsPlaying])

	const togglePlay = () => {
		if (!currentTrackIsPlaying) {
			audioRef.current?.play()
			dispatch(setToggleSong(true))
		} else {
			audioRef.current?.pause()
			dispatch(setToggleSong(false))
		}
	}

	const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {
		if (!audioRef.current) return

		const currentValue = +e.currentTarget.value / 100

		audioRef.current.volume = currentValue
		setVolume(currentValue)
	}

	return { audioRef, togglePlay, changeVolume }
}
