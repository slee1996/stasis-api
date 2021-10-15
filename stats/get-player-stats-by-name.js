const { getMembershipIdByName } = require('../player')
const requestWrapper = require('../request-wrapper')

module.exports = async ({displayName}) => {
  const membershipId = await getMembershipIdByName({displayName})
  const url = `/Destiny2/1/Account/${membershipId}/Stats/`
  const stats = await requestWrapper({url, method: 'get'})

  return {
    membershipId,
    displayName,
    mergedStats: stats.data.Response.mergedAllCharacters.results.allPvP.allTime,
    characterStats: stats.data.Response.characters.filter(character => !character.deleted)
  }
}
