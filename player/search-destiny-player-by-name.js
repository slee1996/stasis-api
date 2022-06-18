const requestWrapper = require('../request-wrapper')

/**
 * Returns a list of Destiny memberships given a global Bungie Display Name. This method will hide overridden memberships due to cross save.
 * @param {string} membershipType - The type of membership to search for, defaults to All
 * @param {string} displayName - The full bungie global display name to look up, include the # and the code at the end. This is an exact match lookup.
 */

module.exports = async ({membershipType = 'All', displayName}) => {
  const url = `/Destiny2/SearchDestinyPlayerByBungieName/${membershipType}/${encodeURIComponent(displayName)}/`
  return await requestWrapper({url, method: 'post', body: { displayName: displayName }})
}