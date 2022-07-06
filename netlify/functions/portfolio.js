data = require('./data.json');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async () => {
  try {
    // console.log(data)
    const randomIndex = Math.floor(Math.random() * data.length)
    const randomImage = data[randomIndex].img
    return {
      statusCode: 200,
      body: randomImage,
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
