const axios = require('axios')

module.exports = async (endpoint, apiKey) => {
  return await axios.get(`https://www.bungie.net/Platform${endpoint}}`,
  {
    headers: {'X-API-Key': process.env.BUNGIE_API_KEY}
  })
}