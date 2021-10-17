const axios = require('axios')

module.exports = async ({method, url, body}) => {
  return await axios({
    baseURL: 'https://www.bungie.net/Platform',
    headers: {'X-API-Key': process.env.BUNGIE_API_KEY},
    url,
    method,
    params,
    body
  })
}