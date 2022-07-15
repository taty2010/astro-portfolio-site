import data from './data.json';
import fetch from 'node-fetch';

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

export const handler = async () => {
  const baseUrl = 'https://api.pexels.com/v1/collections/gb7kvpf'

    const response = await fetch(baseUrl, {
      method: 'GET',
      headers: {
        Authorization: `${process.env.PEXELS_API_TOKEN}`
      }
    })
    .then((res) => res.json())
    // .then(data => console.log(data.media))
    .catch((err) => err)

    const images = response.media.map((img) => {
        return img.src.original
    })

    return {
      statusCode: 200,
      'Conent-Type': 'text/html',
      body: JSON.stringify(images)
    }
}
