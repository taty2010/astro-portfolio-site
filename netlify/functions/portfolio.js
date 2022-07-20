import fetch from 'node-fetch';

export const handler = async () => {
  const baseUrl = 'https://api.pexels.com/v1/collections/x043eny'

    const response = await fetch(baseUrl, {
      method: 'GET',
      headers: {
        Authorization: `${process.env.PEXELS_API_TOKEN}`
      }
    })
    .then((res) => res.json())
    .catch((err) => err)

    const images = response.media.map((img) => {
        return img.src.original
    })
    const randomIndex = Math.floor(Math.random() * images.length)
    const randomImage = images[randomIndex]
    return {
      statusCode: 200,
      body: randomImage
    }
}
