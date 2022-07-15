import fetch from 'node-fetch';

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

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


// data = require('./data.json');

// // Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
// exports.handler = async () => {
//   try {
//     // console.log(data)
//     const randomIndex = Math.floor(Math.random() * data.length)
//     const randomImage = data[randomIndex].img
//     return {
//       statusCode: 200,
//       body: randomImage,
//       // // more keys you can return:
//       // headers: { "headerName": "headerValue", ... },
//       // isBase64Encoded: true,
//     }
//   } catch (error) {
//     return { statusCode: 500, body: error.toString() }
//   }
// }
