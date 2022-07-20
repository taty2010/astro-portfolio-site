// const fetch = require('node-fetch') 
import fetch from 'node-fetch';

export const handler = async () => {
  const baseUrl = 'https://api.pexels.com/v1/collections/gb7kvpf'

    const response = await fetch(baseUrl, {
      method: 'GET',
      headers: {
        Authorization: `${process.env.PEXELS_API_TOKEN}`
      }
    })
    .then((res) => res.json())
    .catch((err) => console.error(err))

    const images = response.media.map((img) => {
        return img.src.original
    })

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html'
      },
      body: JSON.stringify(images)
    }
}
