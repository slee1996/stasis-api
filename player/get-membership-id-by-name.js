const searchDestinyPlayerByName = require('./search-destiny-player-by-name')

module.exports = async ({displayName}) => {
  const response = await searchDestinyPlayerByName({displayName})
  console.log(response)
  return response.data.Response[0].membershipId
}