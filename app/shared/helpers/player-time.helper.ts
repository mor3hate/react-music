export const getTime = (time: number) => {
	const newTime =
		Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)

	return newTime
}
