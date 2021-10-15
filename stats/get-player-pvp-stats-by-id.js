const requestWrapper = require('../request-wrapper')

module.exports = async ({membershipId}) => {
  const url = `/Destiny2/1/Account/${membershipId}/Stats/`
  const stats = await requestWrapper({url, method: 'get'})

  return {
    membershipId,
    stats: stats.data.Response.mergedAllCharacters.results.allPvP.allTime,
    characters: stats.data.Response.characters.filter(character => !character.deleted)
  }
}