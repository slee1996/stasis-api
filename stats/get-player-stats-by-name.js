const { getMembershipIdByName } = require('../player')
const requestWrapper = require('../request-wrapper')

/**
 * @param {String} displayName - The full bungie global display name to look up, include the # and the code at the end. This is an exact match lookup.
 * @returns {Object} 
 */

module.exports = async ({displayName}) => {
  const membershipId = await getMembershipIdByName({displayName})
  const url = `/Destiny2/1/Account/${membershipId}/Stats/`
  const stats = await requestWrapper({url, method: 'get'})

  return {
    membershipId,
    displayName,
    stats: stats.data.Response.mergedAllCharacters.results,
    characters: stats.data.Response.characters.filter(character => !character.deleted)
  }
}
