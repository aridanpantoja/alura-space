import axios from 'axios'
import { cache } from 'react'

type apodImageType = {
  date: string
  copyright: string | null
  explanation: string
  hdurl: string
  url: string
  mediaType: string
  title: string
}

export async function getAPOD() {
  const response = await axios.get<apodImageType>(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`,
  )

  return response.data
}

export const getPictureOfDay = cache(getAPOD)
