import axios from 'axios'

export const axiosClient = axios.create({
  baseURL: process.env.NASA_API_BASE_URL,
})
