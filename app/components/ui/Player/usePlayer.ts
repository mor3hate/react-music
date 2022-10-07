import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import {
	setCurrentTrack,
	setToggleSong,
} from '../../../store/player/PlayerSlice'

export const useAudio = () => {
	const audioRef = useRef<HTMLAudioElement>(null)

	const [volume, setVolume] = useState(0.2)
	const [progress, setProgress] = useState(0)
	const [currentTime, setCurrentTime] = useState(0)
	const [audioTime, setAudioTime] = useState(0)
	const [loop, setLoop] = useState(false)

	const {
		currentTrackIsPlaying,
		currentTrack: { name, index, uri },
		allSongs,
	} = useAppSelector(state => state.persistedReducer)

	const dispatch = useAppDispatch()

	useEffect(() => {
		if (audioRef.current?.duration) setAudioTime(audioRef.current?.duration)
	}, [audioRef.current?.duration])

	useEffect(() => {
		if (currentTrackIsPlaying && name && audioRef.current?.volume) {
			audioRef.current?.play()
			audioRef.current.volume = volume
		} else {
			audioRef.current?.pause()
		}
	}, [currentTrackIsPlaying, name, audioRef.current?.volume, volume])

	const togglePlay = () => {
		if (!currentTrackIsPlaying) {
			audioRef.current?.play()
			dispatch(setToggleSong(true))
		} else {
			audioRef.current?.pause()
			dispatch(setToggleSong(false))
		}
	}

	const prev = () => {
		if (index - 1 < 0) {
			const newIdx = allSongs.length - 1
			dispatch(
				setCurrentTrack({
					index: allSongs.length - 1,
					uri: allSongs[newIdx].hub.actions[1].uri || '',
					name: allSongs[newIdx].title,
				})
			)
		} else {
			const newIdx = index - 1
			dispatch(
				setCurrentTrack({
					index: index - 1,
					uri: allSongs[newIdx].hub.actions[1].uri || '',
					name: allSongs[newIdx].title,
				})
			)
		}
	}

	const next = () => {
		if (index < allSongs.length - 1) {
			const newIdx = index + 1
			dispatch(
				setCurrentTrack({
					index: index + 1,
					uri: allSongs[newIdx]?.hub.actions[1].uri || '',
					name: allSongs[newIdx]?.title,
				})
			)
		} else {
			const newIdx = 0
			dispatch(
				setCurrentTrack({
					index: 0,
					uri: allSongs[newIdx]?.hub.actions[1].uri || '',
					name: allSongs[newIdx]?.title,
				})
			)
		}
	}

	const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {
		if (!audioRef.current) return

		const currentValue = e.currentTarget.valueAsNumber / 100

		audioRef.current.volume = currentValue
		setVolume(currentValue)
	}

	useEffect(() => {
		const audio = audioRef.current

		if (!audio) return

		const updateProgress = () => {
			setCurrentTime(audio.currentTime)
			setProgress((audio.currentTime / audioTime) * 100)
		}

		audio.addEventListener('timeupdate', updateProgress)

		return () => {
			audio.removeEventListener('timeupdate', updateProgress)
		}
	}, [audioTime])

	const changeProgressInput = (e: FormEvent<HTMLInputElement>) => {
		const audio = audioRef.current

		if (!audio) return

		const newTime = (e.currentTarget.valueAsNumber / audioTime) * 80

		audio.currentTime = newTime

		setProgress(newTime)
	}

	const makeSongLoop = () => {
		setLoop(!loop)
	}

	return {
		audioRef,
		togglePlay,
		changeVolume,
		volume,
		audioTime,
		currentTime,
		progress,
		changeProgressInput,
		makeSongLoop,
		loop,
		next,
		prev,
	}
}
