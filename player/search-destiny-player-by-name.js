/**
 * Returns a list of Destiny memberships given a global Bungie Display Name. This method will hide overridden memberships due to cross save.
 * @param {string} membershipType - The type of membership to search for, defaults to All
 * @param {string} displayName - The full bungie global display name to look up, include the # and the code at the end. This is an exact match lookup.
 */

const requestWrapper = require('../request-wrapper')

module.exports = async (membershipType = 'All', displayName) => {
  return await requestWrapper(`/Destiny2/SearchDestinyPlayer/${membershipType}/${encodeURIComponent(displayName)}/`)
}