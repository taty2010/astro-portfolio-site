import fetch from 'node-fetch';

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

export const handler = async () => {
  const baseUrl = 'https://api.pexels.com/v1/collections/gb7kvpf'

  try {
    const response = await fetch(baseUrl, {
      method: 'GET',
      headers: {
        Authorization: `${process.env.PEXELS_API_TOKEN}`
      }
    });
    const data = await response.json();
    const images = await data.media.map((img) => {
      return img.src.original
    })
    return { statusCode: 200, body: JSON.stringify({ images }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }

    // const response = await fetch(baseUrl, {
    //   method: 'GET',
    //   headers: {
    //     Authorization: `${process.env.PEXELS_API_TOKEN}`
    //   }
    // })
    // .then((res) => res.json())
    // .catch((err) => console.error(err))

    // const images = response.media.map((img) => {
    //     return img.src.original
    // })

    // return {
    //   statusCode: 200,
    //   headers: {
    //     'Content-Type': 'text/html'
    //   },
    //   body: JSON.stringify(images)
    // }
}
