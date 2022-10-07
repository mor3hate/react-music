import axios from 'axios'

export const axiosDefault = axios.create({
	baseURL: process.env.SERVER_URL,
	headers: {
		'Content-type': 'application/json',
		'X-RapidAPI-Key': process.env.RAPID_KEY,
	},
})
