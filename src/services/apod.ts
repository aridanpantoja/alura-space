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
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`,
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    },
  )
  const data: apodImageType = await response.json()

  return data
}

export const getPictureOfDay = getAPOD
