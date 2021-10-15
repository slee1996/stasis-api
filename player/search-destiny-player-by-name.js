/**
 * Returns a list of Destiny memberships given a global Bungie Display Name. This method will hide overridden memberships due to cross save.
 */

const requestWrapper = require('../request-wrapper')

module.exports = async (membershipType, displayName) => {
  return await requestWrapper(`/Destiny2/SearchDestinyPlayer/${membershipType}/${displayName}/`)
}